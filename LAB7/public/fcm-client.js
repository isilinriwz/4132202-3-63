//EDIT THIS FILE

/***
* Make sure to call the super() constructor with your sender ids
* When your website is closed the handleBackgroundMessage will be called. You should create a notification there.
***/
class FCMClientImplementation extends FCMClient{
	constructor(){
		super(["126888383287"])
	}
	handleBackgroundMessage(serviceWorker, payload){
		serviceWorker.registration.showNotification("Test Notification",{"body":payload.data.message});
	}
}