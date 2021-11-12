# About CHLK

CHLK is meant to be an interactive lecturing platform. Teachers are able to create slideshow presentations with minimal extra effort, and when presenting students are presented with an interactive experience to keep them engaged with the lecture.
**Example**:
A teacher creates the following bulletpoint: "_Variable: a way to store data."
The teacher can highlight and mark this as a definition, then when presenting the students will be presented with this fill in the blank bullet point: "_\_\_\_\_: a way to store data."

# Run locally

Unfortunately we had some trouble running a package manager at the top project level. So once you download the code you may run into some problems with missing packages/dependencies, feel free to ping us on discord and we can help figure out what needs to be installed.

**Getting Started **:
There are 2 commands to be run in order to get the project up.
The first command only needs to be run once. First navigate into

> chlk_webapp/frontend

Then run "npm run dev". This gets the javascript code packaged and compiled by webpack and babble, and stores it in the correct folder. Note that once you run this it will keep running and watching for changes in the javascript code. If you are not going to make any changes you can stop this command after it has completed.

The second step is to get the Django Project up and running. Navigate to the top level folder

> chlk_webapp

Then run "python manage.py runserver". This will start the server, this command will also keep running. This must stay running while you want the project up.

## Project Structure

The project is built with a React frontend, and a Django and MongoDB backend.

# Feel free to reach out to us with any questions.
