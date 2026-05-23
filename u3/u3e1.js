// T3. JavaScript profesional en una aplicación web
// U2. Eventos personalizados (custom events)
// Enunciado disponible en u3e1.md / Enunciat disponible a u3e1.md

//Escribe aquí tu solución / escriviu aquí la vostra solució:

class Sender{

static TYPE_A = "EVENT_NOTIFICATION_A"
static TYPE_B = "EVENT_NOTIFICATION_B"

#refDom
type;
count = 0;

constructor(ref,type){
    this.#refDom=ref;
    this.type=type;
    
    this.init();
}

    init(){
        this.#refDom.addEventListener("click",(event)=>{
            event.preventDefault();
            this.trigger();
        });
    }

    trigger(){

        this.count++;
      const customEvent = new CustomEvent(this.type,
    {
        detail: this.count
    });

    document.dispatchEvent(customEvent);
    
    this.render();

    }

    render(){

        const typeSender = this.type.slice(-1);

        this.#refDom.textContent = `${typeSender}: ${this.count}`;
        
    }

}


class Logger {

    #refDom;

    #notificationList = [];

    constructor(ref) {

        this.#refDom = ref;

        this.handleNotification = this.onNotificationReceived.bind(this);

        this.init();

    }

    init() {

        document.addEventListener(

            Sender.TYPE_A,

            this.handleNotification

        );

        document.addEventListener(

            Sender.TYPE_B,

            this.handleNotification

        );

    }

    onNotificationReceived(event) {


        this.#notificationList.unshift(event);

        this.render();

    }

    render() {

        this.#refDom.innerHTML = "";

        this.#notificationList.forEach(notification => {

            const p = document.createElement("p");

            p.textContent =

                `${notification.type}: ${notification.detail}`;

            this.#refDom.appendChild(p);

        });

    }

    destroy() {

        document.removeEventListener(

            Sender.TYPE_A,

            this.handleNotification

        );

        document.removeEventListener(

            Sender.TYPE_B,

            this.handleNotification

        );

    }

}


const notificationADom = document.querySelector('.js-notification-A');
const notificationBDom = document.querySelector('.js-notification-B');
const loggerDom = document.querySelector('.js-logger');

const nA = new Sender(notificationADom, Sender.TYPE_A);
const nB = new Sender(notificationBDom, Sender.TYPE_B);
const logger = new Logger(loggerDom);

notificationADom.click();
notificationADom.click();
notificationBDom.click();
notificationBDom.click();
notificationBDom.click();
notificationBDom.click();
notificationADom.click();

logger.destroy();

notificationADom.click();
notificationBDom.click();
notificationBDom.click();


