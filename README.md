# Senior-Design-Mini-Project

**Before Starting**:
After downloading the project, please run the command **npm audit fix ==> cd ios ==> pod install** inside the Project folder on the terminal. This will install all necessary pods and modules of this projects.

Anika Sharma:

For the mini-project, Xinyu and I met Monday evening to go over the project details together and split up the workload evenly.

On **Monday, September 13**, we had decided as a team that Xinyu would focus on the barcode scanning aspect of the app while I would look into obtaining and connecting the API key from the FDA website to have access to the nutrition information needed.

Before we met on Monday, I played around with Android Studio and refamiliarized myself with the application, as I had previously used the software in order to create an Android App for EC327. I also set up my REACT native environment on my laptop using the tutorial provided on the project slides. In addition to that, I watched some Youtube videos on React Native, rest API's, and Firebase to gain a better understanding of what is expected of us for this mini project.

On **Wednesday, September 15**, I completed both the REACT native tutorial on the official website and setup my Firebase. I also created a new AVD that would be compatible with the app being developed for this project. I had to go back and download a few more libraries and resources on Android Studio in order to use REACT and Android Studio together (and API's).

On **Thursday, September 16**, I created a project on Android Studio and began working on connecting the FDA API, Firebase, and using GITHUB secrets to store the API key. I saved the API key as a secret in the Github Repository. I had some difficulty creating a new project on my Firebase account with my school email, so I ended up using my personal email in order to create this new project. I also had some difficulties having Android Studio run a new project I created through Windows Powershell using npm, so I will try again tomorrow in order to narrow down where the issue is and work on connecting the application to the Firebase project along with allowing access to the API key.

The firebase project can be found at this link connected to my personal email (anikash03@gmail.com): https://console.firebase.google.com/u/1/project/barcode-scanner-bd7d2/overview
(NO LONGER APPLICABLE)

On **Friday, September 17**, Xinyu and I communicated and he decided to connect a firebase project under his email to the Barcode application. My main goal for the day is to implement the FDA API so that the app has access to the nutrition information. In order to get around the issue I was having with Android Studio yesterday, I will be working on the project that Xinyu started on his laptop to work on the barcode and google authentication and push my changes to the repository accordingly.

Xinyu Liu

On **Monday, September 13**, I set up the React-Native development environment on the macOS, and design the basic layout of my app.

On **Tuesday, September 14**, I linked the React-Native-Camera into my app and successfully implemented the Camera on IOS and Android.

On **Wednesday, September 15**, I used the React-Native-Camera to untilize the function of barcode reader and picrture taking for IOS and Android.

On **Thursday, September 16**, I created a project on Google Cloud Platform and get the OAuth2.0 ID for Gmail login on IOS, and I also created a project of firebase and get the GoogleServiceInfo.plist and Web Client ID to allow users use their own Gmail to access our Firebase storage.

On **Friday, September 17**, There still have some bugs on the Google signin function, and I also create a function of signout. I'll work with Anika to get the nutrition information of users's barcode or picture through the nutrition API. 
