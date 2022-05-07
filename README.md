# alotl-media
Centralized platform for sharing recommendations and ratings for all media types with friends

### User Profile Page

![image](https://user-images.githubusercontent.com/11655553/167235402-3db055cd-c0d9-4783-bb2a-65bb4c0d340c.png)



### Create Db
<img width="901" alt="image" src="https://user-images.githubusercontent.com/11655553/167234444-130f18aa-c931-4f84-bb5d-4d020ad44629.png">


```
CREATE TABLE "public.User" (
	"_id" serial(255) NOT NULL,
	"username" varchar(15) NOT NULL UNIQUE,
	"password" TEXT NOT NULL,
	CONSTRAINT "User_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.Media" (
	"_id" serial(255) NOT NULL,
	"type" varchar(5) NOT NULL,
	"title" serial(255) NOT NULL,
	CONSTRAINT "Media_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.reviews" (
	"_id" serial NOT NULL,
	"user_id" int NOT NULL,
	"media_id" int NOT NULL,
	"review" varchar(255) NOT NULL,
	"rating" int NOT NULL,
	CONSTRAINT "reviews_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);





ALTER TABLE "reviews" ADD CONSTRAINT "reviews_fk0" FOREIGN KEY ("user_id") REFERENCES "User"("_id");
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_fk1" FOREIGN KEY ("media_id") REFERENCES "Media"("_id");
```
