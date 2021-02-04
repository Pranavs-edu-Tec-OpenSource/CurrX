document.addEventListener('DOMContentLoaded', function() {

            document.querySelector('form').onsubmit = function() {
           
           const button = document.querySelector('button');
           
           button.innerHTML = '<div class="loading loading--full-height"></div>';
           
            const base = document.querySelector('#base_cur').value.toUpperCase();
                fetch(`https://api.exchangeratesapi.io/latest?base=${base}`)
                .then(response => response.json())
                .then(data => {
                    const currency = document.querySelector('#currency').value.toUpperCase();
                    const rate = data.rates[currency];
                    
                    const baseVal = data.base;
                    
                    const date = data.date;
                    
                    const time = new Date();
                    
                    if (rate !== undefined) {
                        const result = `<div id="result_box">1 ${baseVal} is equal to ${rate.toFixed(3)} ${currency}<br><hr>As on:- ${time}</div>`;
                    document.querySelector('#result').innerHTML = result;    
                    window.setTimeout("capital()",2000)    
                    } else {
                        document.querySelector('#result').innerHTML = 'Invalid currency.';
                        window.setTimeout("capital()",2000);    
                    }
                })
                .catch(error => {
                    console.log('Error:', error);
                });
                return false;
            }
            
        });

function capital(){
				
				const button = document.querySelector('button');
            button.innerHTML ='<input type="image" src="img/arrow_swap.png" id="submit">';
            
}