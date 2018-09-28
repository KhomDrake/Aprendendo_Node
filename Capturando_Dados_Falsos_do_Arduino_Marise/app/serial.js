// localizo na pasta node_modules, o modulo serialport, que é para eu conseguir fazer a comunicação com o arduino.
const SerialPort = require('serialport');
// deixo a variavel do tipo Readline para poder utilizar mais a frente.
const Readline = SerialPort.parsers.Readline;

// crio o tipo ArduinoDataRead
class ArduinoDataRead {

    // função que é chamado quando uma variavel do tipo ArduinoDataRead é criada.
    constructor(){
        // declaro uma variavel que é um atributo das variaveis do tipo ArduinoDataRead
        this.listData = [];
    }

    // Função que retorna a variavel listData.
    get List() {
        return this.listData;
    }

    // função para fazer a conexão com o arduino e pegar os seus dados
    SetConnection(){

        // essas duas
        this.listData.push(27);      
        this.listData.push(50);        
        // utilizei para criar dados artificiais, já que não tenho arduino em casa.
        // em seguida, explicarei o código para pegar as informações do arduino.


        // acesso a váriavel SerialPort e acesso a lista de dispositivos conectados ao computador usando a função list(), que está dentro de SerialPort
        // então, espero essa função termina de ser executado
        // SerialPort.list().then(listSerialDevices => {

        // essa função vai passar as informações dos dispositivos conectados para a listSerialDevices
            
        // aqui filtro essa lista de dispositivos da variavel listSerialDevices
        //     let listArduinoSerial = listSerialDevices.filter(serialDevice => {
        //         return serialDevice.vendorId == 2341 && serialDevice.productId == 43;
        //     });
            
        // verifico se depois de filtrar, se só existe um dispositivo que sobrou
        // caso tenha mais de um ou nenhum
        //     if (listArduinoSerial.length != 1){
            // informar essa mensagem de error
        //         throw new Error("The Arduino was not connected or has many boards connceted");
        //     }
    
        //     console.log("Arduino found in the com %s", listArduinoSerial[0].comName);
             
        // retornar o nome da porta que esse dispositivo esta conectado
        //     return  listArduinoSerial[0].comName;
            
        // }).then(arduinoCom => {

        // o nome da porta é atribuido para essa variavel arduinoCom, depois que a função anterior foi executada.
            
        // acesso o arduino que está nessa porta.
        //     let arduino = new SerialPort(arduinoCom, {baudRate: 9600});
            
        // crio uma variavel do Tipo Readline que vai me ajudar a pegar os dados do arduino.
        //     const parser = new Readline();
        // acesso o arduido e acesso as informações dele através da variavel parser
        //     arduino.pipe(parser);
            
        // depois que parser receber o dado
        //     parser.on('data', (data) => {
            // ele vai adicionar esse dado a variavel listData, que é a lista de dados lidos pelo arduino.
        //         this.listData.push(parseFloat(data));
        //     });
            
        // caso tenha algum erro no caminho, o código pula para essa linha e informa o erro.
        // }).catch(error => console.log(error));
    } 
}

// criando uma variavel do tipo ArduinoDataRead()
const serial = new ArduinoDataRead();
// ignora essa linha, eu que fiz
setInterval(() => {serial.SetConnection(); }, 1000);

// essa é a que está no código original e estou usando a variavel que criei agora, a serial do tipo ArduinoDataRead e estou chamjando a função
// que conecta com o arduino para pegar as informações
// serial.SetConnection();

// exportando essa variavel para poder acessar ela através do require que está no controller, permitindo eu acessar a informação do arduino que eu armazenei
module.exports.ArduinoData = {List: serial.List} 