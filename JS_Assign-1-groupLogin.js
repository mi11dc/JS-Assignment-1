var teamInput;
var firstNameInput;
var failedOutputMsg = "Access Denied!";
var successOutputMsg = "Welcome ";

teamInput = prompt("Please enter your team number...");

switch(teamInput) {
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
        firstNameInput = prompt("Please enter your first name...");

        if (
            firstNameInput === undefined || 
            firstNameInput === null || 
            firstNameInput === ""
        ) {
            alert(failedOutputMsg);
        }

        switch (firstNameInput.toLowerCase()) {
            case "jaidev":
                alert(successOutputMsg + "Jaidev Patel");
                break;
            case "akul":
                alert(successOutputMsg + "Akul Patel");
                break;
            case "kenan":
                alert(successOutputMsg + "Kenan Gain");
                break;
            case "karanveer":
                alert(successOutputMsg + "Karanveer Dhamu");
                break;
            default:
                alert(failedOutputMsg);
                break;
        }
        
        break;
    default:
        alert(failedOutputMsg);
        break;
}