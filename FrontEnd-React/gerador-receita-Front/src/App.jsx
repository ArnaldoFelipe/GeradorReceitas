import { useState } from "react";
// Importa seu arquivo de estilos
import './App.css';

function App() {

    
    const [IngredientesInput, setIngredientesInput] = useState('');
    const [ReceitaResult, setReceitaResult] = useState('');
    const [isLoading, setIsLoading] = useState(false);

   

    
    const handleInputChange = (e) => {
        setIngredientesInput(e.target.value);
    }

    const handleGenerateReceita = async () => {
        setIsLoading(true);
        setReceitaResult('Gerando sua receita...');

        try {
            const response = await fetch('http://localhost:8080/receita/gerar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    
                    ingredientes: IngredientesInput.split(',').map(item => item.trim())
                }),
            });

            if (!response.ok) {
                const errorMessage = await response.text();

                throw new Error(errorMessage);
            }

            const receitaFinal = await response.text();
            setReceitaResult(receitaFinal);
        }
        catch (error) {
            console.error('Erro ao gerar receita: ', error);
            setReceitaResult(`Não foi possível conectar ou gerar a receita. Detalhes: ${error.message}`);
        }
        finally {
            setIsLoading(false);
        }
    }

   
    return (
        
        <>
            
            <div className="Container">
                <h1>GERADOR DE RECEITAS</h1>
                <h2>DIGITE OS INGREDIENTES</h2>

               
                <input
                    type="text"
                    placeholder="Ex: Arroz, Frango, Tomate..."
                    value={IngredientesInput}
                    onChange={handleInputChange} 
                    disabled={isLoading}
                />
                <br />

                
                <button
                    className="generate-button"
                    onClick={handleGenerateReceita} 
                    disabled={isLoading || IngredientesInput.trim() === ''}
                >
                    
                    {isLoading ? 'GERANDO...' : 'GERAR RECEITA'}
                </button>

                <h2>RESULTADO</h2>


                <textarea
                    className="result-display-box"
                    rows='10'
                    cols='50'
                    value={ReceitaResult}
                    readOnly
                ></textarea>
            </div>
        </>
    );
}

export default App;