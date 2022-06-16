import { LightningElement, track } from 'lwc';

export default class GetIP extends LightningElement {
    @track fName;
    @track lName;
    @track name;

    getIP() {
        const calloutURI = 'https://reqres.in/api/users/2';  // Add base URL to your CSP in salesforce
        fetch(calloutURI, {
            method: "GET"
        }).then((response) => response.json())
            .then(resp => {
                this.fName = resp.data.first_name;
                this.lName = resp.data.last_name;
                this.name = resp.data.first_name + ' ' + resp.data.last_name;
            });
    }

}
