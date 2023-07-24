<!DOCTYPE html>
<html>
<head>
    <title>Encuesta Divertida</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            background-color: #f2f2f2;
        }

        h1 {
            color: #333;
            margin-bottom: 20px;
        }

        h2 {
            color: #555;
            margin-bottom: 15px;
        }

        label {
            display: block;
            margin-bottom: 10px;
        }

        input[type="radio"] {
            margin-right: 5px;
        }

        button {
            margin-top: 10px;
            background-color: #4CAF50;
            color: white;
            border: none;
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
            border-radius: 5px;
        }

        button:hover {
            background-color: #45a049;
        }

        #pregunta2, #pregunta3, #foto {
            display: none;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <h1>Encuesta Divertida</h1>
    <h2>¿Eres manca?</h2>
    <label>
        <input type="radio" name="manca" value="si"> Sí
    </label>
    <label>
        <input type="radio" name="manca" value="no"> No
    </label>
    <br>
    <button onclick="mostrarPregunta2()">Responder</button>

    <div id="pregunta2">
        <h2>¿Eres pisada?</h2>
        <label>
            <input type="radio" name="pisada" value="si"> Sí
        </label>
        <label>
            <input type="radio" name="pisada" value="no"> No
        </label>
        <br>
        <button onclick="mostrarPregunta3()">Responder</button>
    </div>

    <div id="pregunta3">
        <h2>¿Eres Barbi en secreto?</h2>
        <label>
            <input type="radio" name="barbi" value="si"> Sí
        </label>
        <label>
            <input type="radio" name="barbi" value="no"> No
        </label>
        <br>
        <button onclick="mostrarFoto()">Responder</button>
    </div>

    <div id="foto">
        <h2>Eres BARBI en secreto!!!</h2>
        <img src="https://qph.cf2.quoracdn.net/main-qimg-be57486e989b734e1220364c6b4a472a-lq" alt="Foto secreta">
    </div>

    <script>
        function mostrarPregunta2() {
            var pregunta1 = document.querySelector('input[name="manca"]:checked');
            if (pregunta1 && pregunta1.value === 'si') {
                document.getElementById('pregunta2').style.display = 'block';
            }
        }

        function mostrarPregunta3() {
            var pregunta2 = document.querySelector('input[name="pisada"]:checked');
            if (pregunta2 && pregunta2.value === 'si') {
                document.getElementById('pregunta3').style.display = 'block';
            }
        }

        function mostrarFoto() {
            var pregunta3 = document.querySelector('input[name="barbi"]:checked');
            if (pregunta3 && pregunta3.value === 'si') {
                document.getElementById('foto').style.display = 'block';
            }
        }
    </script>
</body>
</html>
