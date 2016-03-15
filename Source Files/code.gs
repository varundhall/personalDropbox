// =================================================
// Author:      Varun Dhall
// Create date: 16th March 2016
// Description: Google Script for personal Dropbox
// =================================================

function doGet(e){
    return HtmlService.createHtmlOutputFromFile('form.html');
}

function uploadFiles(form){
     try{
        //defining the name of the folder, all the files will be uploaded to this folder in GDrive
        var dropFolderName = "myDropFolder";
        //getting enumeration of folders by name, there can be other folders of same name in GDrive
        var foldersEnum = DriveApp.getFoldersByName(dropFolderName);
        var folder;
        //now, either we will select a particular folder or create a new one with the specified name
        if (foldersEnum.hasNext()) {
        folder = foldersEnum.next();
    } else {
        folder = DriveApp.createFolder(dropFolderName);
        }
        //getting the file from form and creating a new file in the particular folder in GDrive
        var blob = form.myFile;    
        var file = folder.createFile(blob);
        //setting description of the file for future reference
        if(form.myDes.length <=0 ){
            file.setDescription("Uploaded by " + form.myName + " Description: Not Available ");
    }
        else{
            file.setDescription("Uploaded by " + form.myName + " Description: " + form.myDes);
    }
        //returning successfull message
        return "Thanks! File uploaded successfully. ";
    }catch (error){
        //incase of any error, it will display the coressponding the message
        return error.toString();
    }
}
