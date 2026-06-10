/* --- INTERATIVIDADE JAVASCRIPT (SIMULADOR) --- */
        .simulador-box {
            background: var(--branco);
            padding: 2.5rem;
            border-radius: 8px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.05);
            max-width: 600px;
            margin: 0 auto;
        }

        .form-group {
            margin-bottom: 1.5rem;
        }

        .form-group label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 500;
        }

        .form-group select {
            width: 100%;
            padding: 0.8rem;
            border: 2px solid #e2e8f0;
            border-radius: 5px;
            font-size: 1rem;
            outline: none;
        }

        .form-group select:focus {
            border-color: var(--verde-principal);
        }

        #resultado {
            margin-top: 2rem;
            padding: 1.5rem;
            border-radius: 5px;
            display: none;
            font-weight: 500;
            text-align: center;
        }

        .sucesso {
            background-color: #d8f3dc;
            color: var(--verde-escuro);
            border: 1px solid var(--verde-claro);
        }

        /* --- RODAPÉ --- */
        footer {
            background-color: var(--verde-escuro);
            color: var(--branco);
            text-align: center;
            padding: 2rem;
            margin-top: 4rem;
            font-size: 0.9rem;
        }
    </style>
</head>
<body>

    <header>
        <div class="logo">
            <h1>🌱 EcoCampo</h1>
        </div>
        <nav>
            <ul>
                <li><a href="#sobre">Início</a></li>
                <li><a href="#praticas">Práticas</a></li>
                <li><a href="#simulador">Simulador</a></li>
            </ul>
        </nav>
    </header>

    <section class="hero" id="sobre">
        <h2>O Futuro da Agricultura é Sustentável</h2>
        <p>Descubra como a tecnologia e as técnicas de preservação estão transformando o campo, economizando recursos e protegendo o nosso planeta.</p>
        <a href="#simulador" class="btn">Simule Seu Impacto</a>
    </section>

    <section class="container" id="praticas">
        <h2 class="secao-titulo">Pilares do Campo Sustentável</h2>
        <div class="grid-praticas">
            <div class="card">
                <h3>🔄 Rotação de Culturas</h3>
                <p>Alternar espécies de plantas na mesma área ajuda a quebrar o ciclo de pragas, melhora a nutrição do solo naturalmente e reduz a necessidade de adubos químicos.</p>
            </div>
            <div class="card">
                <h3>💧 Irrigação Gota a Gota</h3>
                <p>Tecnologia que direciona a água direto para a raiz da planta. Evita o desperdício por evaporação e economiza até 50% mais água que sistemas tradicionais.</p>
            </div>
            <div class="card">
                <h3>☀️ Energia Solar Rural</h3>
                <p>A utilização de painéis fotovoltaicos para alimentar bombas d'água e cercas elétricas diminui a pegada de carbono da fazenda e reduz custos operacionais.</p>
            </div>
        </div>
    </section>

    <section class="container" id="simulador">
        <h2 class="secao-titulo">Simulador de Economia Verde</h2>
        <div class="simulador-box">
            <p style="margin-bottom: 1.5rem; text-align: center; color: #666;">Escolha as práticas que deseja adotar na sua propriedade e veja a estimativa de benefícios:</p>
            
            <div class="form-group">
                <label for="tecnologia">Sistema de Irrigação:</label>
                <select id="tecnologia">
                    <option value="0">Tradicional (Aspersão comum)</option>
                    <option value="1">Gota a Gota Inteligente</option>
                </select>
            </div>

            <div class="form-group">
                <label for="energia">Fonte de Energia Principal:</label>
                <select id="energia">
                    <option value="0">Rede Elétrica Comum / Diesel</option>
                    <option value="1">Energia Solar Fotovoltaica</option>
                </select>
            </div>

            <button class="btn" style="width: 100%;" onclick="calcularImpacto()">Calcular Impacto Ambiental</button>

            <div id="resultado" class="sucesso"></div>
        </div>
    </section>

    <footer>
        <p>&copy; 2026 EcoCampo - Cultivando um amanhã melhor. Desenvolvido para um campo mais verde.</p>
    </footer>

    <script>
        function calcularImpacto() {
            // Captura os valores selecionados nos menus dinâmicos
            const irrigacao = document.getElementById('tecnologia').value;
            const energia = document.getElementById('energia').value;
            const resultadoDiv = document.getElementById('resultado');
            
            let economiaAgua = "";
            let economiaCarbono = "";

            // Verifica as escolhas do usuário para montar a resposta personalizada
            if (irrigacao === "1") {
                economiaAgua = "💧 <strong>Economia de Água:</strong> Redução de até 50% no consumo de recursos hídricos.<br>";
            } else {
                economiaAgua = "⚠️ <strong>Alerta:</strong> Mudar para o sistema gota a gota pode salvar milhares de litros de água por mês.<br>";
            }

            if (energia === "1") {
                economiaCarbono = "☀️ <strong>Energia Limpa:</strong> Redução drástica na emissão de CO2 e até 90% de economia na conta de luz!";
            } else {
                economiaCarbono = "💡 <strong>Dica:</strong> A energia solar pode zerar seus gastos com geradores a diesel.";
            }

            // Exibe a caixa de resultado com as mensagens geradas
            resultadoDiv.innerHTML = `<h4 style="margin-bottom: 10px;">📊 Diagnóstico de Sustentabilidade:</h4>${economiaAgua}${economiaCarbono}`;
            resultadoDiv.style.display = 'block';
            
            // Faz a tela rolar suavemente até o resultado
            resultadoDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    </script>
</body>
</html>
