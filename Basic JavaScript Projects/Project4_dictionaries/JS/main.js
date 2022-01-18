function my_Dictionary() {
    var Automobile = {
        Design: "Truck",
        Company: "Rivian",
        Color: "Forrest Green",
        Fuel: "Electric",
        Model: "R1T",
      
    };
    delete Automobile.Model;//Deletes KVP in Dictionary
    document.getElementById("Dictionary").innerHTML = Automobile.Model;
    //delete Automobile.Model; placement matters or else it won't recognize the deletion
}