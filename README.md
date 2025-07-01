HOW I HOST MY WEBSITE ON AWS EC2 

Step I Did:
1. I made a github repostiory 'Webpage'
   - I uplaod html and css files.
2. I created an EC2 instance on AWS
   - I used ubuntu (free tier)
3. I opened EC2 using SSH
4. I used putty software to connect my EC2 instance using SSH
5. I convert Private Key .pem to .ppk using PuttyGen
6. I installed git and clone My Github Repostiory
   --Command---
   sudo apt update
   sudo apt install git
   git clone http://github.com/Adityarajoria/webpage.git
7. I installed Apache2 Web Server
   ---Command---
   sudo apt install apache2
   sudo systemctl start apache2
   sudo systemctl enable apache2
8. I Delete default apache Index page
   --command--
   sudo rm /var/www/html/index.html
9. I copied my website files to Apache Folder
    --command--
   sudo cp -r webpage/* /var/www/html/
10. I opened Port 80 in EC2 Security Group
11. I use Elastic IP to keep the same IP always
12. My Public IP: ![Screenshot 2025-07-01 200524](https://github.com/user-attachments/assets/e1da62a2-52cd-4474-9a50-99e042f95c80)![Screenshot 2025-07-01 200541](https://github.com/user-attachments/assets/ade6b3a7-f04f-49c5-b611-5c864c8c8b4c)

