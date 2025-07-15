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
12. My Public IP: http://13.235.49.0

<img width="1918" height="960" alt="Screenshot 2025-07-15 232337" src="https://github.com/user-attachments/assets/1ec369aa-b6c4-4792-8f29-b61c13eddd47" />

