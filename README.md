<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
***
***
***
*** To avoid retyping too much info. Do a search and replace for the following:
*** github_username, repo_name, twitter_handle, email, project_title, project_description
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/Lucifer8729/NSAC-Team-Skywalkers-2021">
    <img align="center" src="images\logo_dark.png" alt="Logo" width="100" height="100">
    <h2 align="center">Eyes in the Sky</h2>
    <h3 align="center">Team Skywalkers - NSAC 2021</h3>
    <h3 align="center">-------------------------------------</h3>
  </a>
  <p align="center">
    Satellite and Drones for Urban Development
    <br />
    <a href="https://drive.google.com/file/d/1t8zIT7De759tVsXf4fjb--0hFfjvDSqO/view?usp=sharing">View Demo</a>
    ·
    <a href="https://github.com/Lucifer8729/NSAC-Team-Skywalkers-2021/issues">Report Bug</a>
    ·
    <a href="https://github.com/Lucifer8729/NSAC-Team-Skywalkers-2021/issues">Request Feature</a>
    .
    <a href="https://bit.ly/3iWeXlT">Deployed Instance</a>
  </p>
</p>

<!-- ABOUT THE PROJECT -->
## About The Project

Land cover data documents how much of a region is covered by forests, wetlands, impervious surfaces, agriculture, and other land and water types. The different types of land cover can be managed or used quite differently. This can be determined by analyzing satellite and drone imagery and that is what we have done.
We have created an accessible and robust website made using ReactJS that will perform land cover segmentation and classification from satellites and drones at the click of a button powered by powerful deep learning models served by FastAPI. We have also showed how drastically land cover changes have occurred due to environmental calamities such as thunderstorms and floods.

## Tech Stack

* [ReactJS](https://reactjs.org/docs/getting-started.html)
* [HTML5, CSS3, Javascript](https://www.w3schools.com/html/html_scripts.asp)
* [FastAPI](https://fastapi.tiangolo.com/)
* [Tensorflow](https://www.tensorflow.org/)
* [AWS EC2 Instances](https://aws.amazon.com/ec2/)

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Installation

* Setting up the FastAPI local endpoint:

  1. cd to the FastAPI server folder

      ```sh
      cd
      cd server/fastapidrone
      ```

  2. Install prerequisite packages

      ```sh
      activate your virtualenv
      pip install -r requirements.txt
      ```

  3. Run FastAPI server at a deployable localhost endpoint

      ```sh
      python app.py
      ```

* Setting up the web application :

  1. Clone the repo

      ```sh
      git clone https://github.com/Lucifer8729/NSAC-Team-Skywalkers-2021.git
      ```

  2. cd to the Flask folder

        ```sh
        cd client
        ```

  3. Install dependencies and create React app

      ```sh
      npm install
      npm start
      ```

<!-- USAGE EXAMPLES -->
## Application in Use

### Salient Features

1. Implementing deep learning models to perform land cover segmentation and classification and serving them at an endpoint using FastAPI.
2. Annotating and segmenting out images of flood affected areas from satellite images.
3. Accessible, interactive and robust web application built on ReactJS and FastAPI.

### What it Looks Like

<img src="images\screencapture-localhost-3000-2021-10-04-04_10_17.png" alt="Italian Trulli">

<img src="images\screencapture-localhost-3000-drone-2021-10-04-04_14_34.png" alt="Italian Trulli">

<img src="images\screencapture-localhost-3000-output-2021-10-04-04_18_09.png" alt="Italian Trulli">

<img src="images\screencapture-localhost-3000-output-2021-10-04-04_15_48.png" alt="Italian Trulli">

<!-- ROADMAP -->
## Flood Relief Use-Case

<img src="images\NSAC - Team Skywalkers Demo PPT.png" alt="Italian Trulli">

<!-- CONTACT -->
## Contributors

[Ved Prakash Dubey](https://www.linkedin.com/in/ved-prakash-dubey-swash/) - Linkedin

[Saurav Kumar](https://www.linkedin.com/in/saurav-kumar-70362a20a/) - Linkedin

[Aakash Gupta](https://www.linkedin.com/in/aakash-gupta-849ab120a/) - Linkedin

[Aniket Agarwal](https://www.linkedin.com/in/aniket-agarwal-0920/) - Linkedin

[Tanvi Gupta](https://github.com/Tanviguppta) - GitHub

[Rishy Parasar](https://www.linkedin.com/in/rishy-parasar-782601197/) - Linkedin

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

* [Kaggle](https://www.kaggle.com/sudalairajkumar/covid19-in-india)
* [NASA Space Apps Challenge](https://www.spaceappschallenge.org/)
* [Aarush](https://www.linkedin.com/company/aaruush-srm-ist/)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/Lucifer8729/NSAC-Team-Skywalkers-2021
[forks-shield]: https://img.shields.io/github/forks/Lucifer8729/NSAC-Team-Skywalkers-2021
[contributors-url]: https://github.com/Lucifer8729/NSAC-Team-Skywalkers-2021/graphs/contributors
[forks-url]: https://github.com/Lucifer8729/NSAC-Team-Skywalkers-2021/network/members
