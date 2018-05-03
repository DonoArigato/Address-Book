"use strict";

class AddressBook{
    constructor(){

     this.contacts = [
        new Contact("Dezmen","dezmen@gmail.com","3134482424","brother"),
        new Contact("Kwame","Kwame@gmail.com","3134423234","friend"),
        new Contact("Hannah","Hannah@Hannah.com","383-344-3434","friend"),
        new Contact("Frankie","Hannah@Hannah.com","383-344-3434","friend")


        ];
        }
    //   ADD METHOD  
    add(info) {
        const addedContact = new Contact(info.name,info.email,info.phone,info.relation);
        this.contacts.push(addedContact);


    }

    //  DELETE METHOD
    deleteAt(index){
        this.contacts.splice(index,1);
    
    }
    // PRINT METHOD
    print (){
        console.log(this.contacts);
      }
}

    
    

    class Contact{
        constructor (name,email,phone,relation){
            this.name = name;
            this.email = email;
            this.phone = phone;
            this.relation = relation;
        }
    }
 
    const myAddressBook = new AddressBook() 
// 
// WHILE LOOP
while(true){
    let userInput = prompt("Would you like to add, delete,print, or quit?");
    let userInputLowerCase = userInput.toLowerCase();
    if ( userInputLowerCase === "add"){
            const info = {
                name: prompt("Name?"),
                email: prompt("Email?"),
                phone: prompt("Phone?"),
                relation: prompt("Relation?")
            }

            console.log(info);
            myAddressBook.add(info);
            console.log(myAddressBook);
 
            console.log("selected add");
        // ELSE IF LOOP
        } else if (userInputLowerCase === "delete"){

            const index = prompt("Select the number of the index you would like to delete.");
                myAddressBook.deleteAt(index);
                console.log(myAddressBook);
                console.log("selected delete");
         
        //  ELSE IF LOOP
      
        } else if (userInputLowerCase === "print"){ 
                for (let i = 0; i < myAddressBook.contacts.length; i++){
                    console.log(myAddressBook.contacts[i]); 
                }
 
        //  ELSE IF
                 }  else if (userInputLowerCase === "quit"){

                    console.log("selected quit");
                      break;
        //  ELSE LOOP
                    } else {
                        console.log("Ouch");
                        continue; 
                    }
}

