import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http:Http) { }
addMessage(idEmetteur,idRecepteur,message){
  return this.http.post("http://localhost:8181/addMessage/"+idEmetteur+"/"+idRecepteur,message);
}

getMessageByConversation(idEmetteur,idRecepteur){
  return this.http.get("http://localhost:8181/messagesByConversation/"+idEmetteur+"/"+idRecepteur);
}

getAllMessaheByConversation(idEmetteur,idRecepteur){
  return this.http.get("http://localhost:8181/getAllMsgByConversation/"+idEmetteur+"/"+idRecepteur);
}

}
