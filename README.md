# Redux Feedback Form

## Description

This app lets you track 4 things:
  - How are you feeling
  - How well are you understanding the material
  - How well are you being supported
  - Any additional comments
  
And then it stores your answers in a database.

## Prereqs

- Node
- Postgres
- Postico

## Installation

1. Clone this repo.
2. Ensure that Postgres is running.
3. Follow the instructions in `data.sql` to create the database and table.
4. Navigate to the cloned repo in the terminal.
5. Run npm install to install all dependencies.
6. Run npm run server
7. Run npm run client in another tab. This automatically opens the app in your browser.

## Usage

1. Fill out the input and then click the 'Next' button.
2. Click the 'Back' button to return to the previous page.
3. After completing all inputs, you will be shown a confirmation page. Click the 'Submit' button.
4. Upon successful submission, you will be shown a Success page. From there, you can start the feedback form again.

## Acklowledgment

Thank you to Prime, my instructors, and the Shawl cohort for your help and support.
