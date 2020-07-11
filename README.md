# airSupply

2. Names of the team members:

MIKEY ROMAY, JOSH FORD, NATHAN MARTEL, SCOTT CAMPBELL

3. A description of the project:

AIR SUPPLY is a project intended to create a resource for artists—artistsof any level and practictioners of any medium—with a living resource for locating information regarding artist residencies (where, when, deadlines, contact information, how to apply, etc), as well as funding opportunities. The goal is to faciliate the pursuit and creation of art and help those interested in obtaining a residency find the information they need.

4. The overall problem domain and how the project solves those problems:

THE PROBLEM DOMAIN IS that the readiness of this information is highly unavailable and where it is available, it is not often well kept or thorough. THIS IS SOLVED BY our project because we do precisely that. We take a well of data, organize it into a database, and then render it in the UI for easy and universal access.

5. Semantic versioning, beginning with version 1.0.0 and incremented as changes are made:

- - -

6. A list of any libraries, frameworks, or packages that your application requires in order to properly function:

supergent 
react-google-maps



7. Instructions that the user may need to follow in order to get your application up and running on their own computer:

Intuitive.
Home will bring you too homepage.
Login will allow you to login and create user and have the ability to save and add residencies.
Search will search for any match in the database.
The drop down narrows options on map to the given state.


8. Clearly defined API endpoints with sample responses:

ENDPOINTS ...
 i. app.get('/api/me/favorites', async(req, res) ... )
 ii. app.get('/listings/state/dropdown/:id', async(req, res) ... )
 iii. app.post('/api/me/listings', async(req, res) ... )
 iv. app.put('/api/me/listings/:listingID', async(req, res) ... )

SAMPLE RESPONSES ...
 i. response will return the full list of residencies that signed-in user has bookmarked
 ii. response will return only the residencies in the state selected by the user in the dropdown
 iii. response will create a new residency and add it to the list of searchable residencies in the site.
 iv. response will update a given residency that that user has created.


9. Clearly defined database schemas:

CREATE TABLE users (
                    id SERIAL PRIMARY KEY,
                    email VARCHAR(256) NOT NULL,
                    hash VARCHAR(512) NOT NULL,
                    display_name VARCHAR(256) NOT NULL,
                    is_admin BOOLEAN DEFAULT FALSE
                );           
CREATE TABLE air_listings (
                    id SERIAL PRIMARY KEY NOT NULL,
                    program_name VARCHAR(256),
                    address VARCHAR(256),
                    city VARCHAR(256),
                    state VARCHAR(2),
                    zip_code VARCHAR(256),
                    country VARCHAR(256),
                    continent VARCHAR(256),
                    phone_num VARCHAR(20), 
                    email VARCHAR(256),
                    art_medium VARCHAR(256),
                    img_url VARCHAR(600),
                    link_url VARCHAR(600),
                    description VARCHAR(256),
                    user_id INTEGER,
                    is_grant BOOLEAN,
                    lat VARCHAR(256),
                    long VARCHAR(256)
            );
CREATE TABLE favorites (
                    id SERIAL PRIMARY KEY NOT NULL,
                    program_name VARCHAR(256),
                    address VARCHAR(256),
                    city VARCHAR(256),
                    state VARCHAR(2),
                    zip_code INTEGER,
                    country VARCHAR(256),
                    continent VARCHAR(256),
                    phone_num VARCHAR(20), 
                    email VARCHAR(256),
                    art_medium VARCHAR(256),
                    img_url VARCHAR(600),
                    link_url VARCHAR(600),
                    description VARCHAR(256),
                    user_id INTEGER NOT NULL REFERENCES users(id),
                    is_grant BOOLEAN,
                    lat VARCHAR(256),
                    long VARCHAR(256),
                    unique (user_id, program_name)
