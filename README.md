#Personal  DropBox powered by Google Drive

If you are looking for a personal dropbox or upload corner in your website so that you can easily upload the files or can ask other to upload then this is the perfect solution for you.

Just deploy the google script and html file on  [Google Apps Script](
) after making certain changes to suit your needs. You can deploy this script for free with your primary account. Thanks to Google :)


Basically with this script you can collect all the data in a particular folder in your **Google Drive**. It can be used for any purpose  like a professor wants to have a public dropbox/upload corner where students can upload assignments or a recruiter wants to have an online form where everyone can upload their resumes.

Let's dive into the implementation details
Please read this carefully. It's not the usual yada yada.

1. **Signin** with your **Gmail account** and open  [Google Apps Script](https://script.google.com)

2. Add code.gs and form.html to your new project and save all the changes.

3. You have to authenticate your project/script with your Google account so open/select code.gs and from the **Run** menu, choose **doGet** and authorize the script. (It will ask for Google Drive permissions)

4. After authentication, you are good to go, just **Deploy as Web App** from **Publish** menu. Click **Save New Version**, choose **Anyone, even Anonymous** from drop-down and click on **Deploy**


![ ](http://varundhall.com/GitHub/personalDropbox.png  "Personal DropBox")