# Web Automation Testing Project using WebdriverIO & Cucumber on Chrome and Firefox browsers

### How to Run This Web Automation Testing Project
1. Run ---> `npm init wdio .`.
2. Choose **Cucumber** and **Allure** on WebdriverIO configuration setting. And also, please kindly choose **Chrome** and **Firefox** for the browsers selection setting. Other configuration settings have been provided in details on the snip below.
![image](https://github.com/riandinia/DS_Sesi11_AnggityaRiandini/assets/159536290/343517e3-9db6-4d55-a66d-014179cc6049)
3. Run ---> `npm install dotenv --save-dev`.
4. Run ---> `npm install allure-commandline --save-dev`.
5. In **package.json** file, please edit the Script part at the end of the file, as shown below.
![image](https://github.com/riandinia/DS_Sesi10_AnggityaRiandini/assets/159536290/7f844def-dfd8-4dde-9f58-ef2a2a32fab8)
Code has been attached in **package.json** file within this repository. 
6. If you are using Windows environment, please kindly run VS Code / terminal as administrator.
7. Run `npm run wdio ""` for this testing project only.



### Allure Report
1. Generated automated testing results and report shall be restored in **allure-results** and **allure-report** folder.
2. Run `npm run open-allure` to open the report.

*) Note
If you want to generate another Allure results, you can run `npm run generate-allure`. 

This snip below is shown as a reference for the results of this web automation testing project. 
![image](https://github.com/riandinia/DS_Sesi11_AnggityaRiandini/assets/159536290/ed90fff5-7cbe-4a05-a784-5ca45305aa93)
