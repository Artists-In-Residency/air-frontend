# airSupply

<a href='http://airsupply.netlify.app/'>Deployed Site</a>

airSupply is a project intended to create a resource for artists—artistsof any level and practictioners of any medium—with a living resource for locating information regarding artist residencies (where, when, deadlines, contact information, how to apply, etc), as well as funding opportunities. The goal is to faciliate the pursuit and creation of art and help those interested in obtaining a residency find the information they need.

### tech:
React | Express | PostgreSQL | Node.js | Google Maps API


### to install:
```npm i```  
```npm run start```

### backend endpoints:
get - '/api/me/favorites'  
get - '/listings/state/dropdown/:id'  
post - '/api/me/listings'  
put - '/api/me/listings/:listingID'  

### devs:
Mikey Romay, Josh Ford, Nathan Martel, Scott Campbell

### database schema:  
  
```
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
