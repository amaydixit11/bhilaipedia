CREATE TABLE "user" (
    "user_id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "email" character varying NOT NULL,
    "name" character varying NOT NULL,
    "role" character varying NOT NULL,
    "created_at" TIMESTAMP NOT NULL DEFAULT now(),
    CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"),
    CONSTRAINT "PK_758b8ce7c18b9d347461b30228d" PRIMARY KEY ("user_id")
);

CREATE TABLE "user_profile" (
    "user_id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "profile_url" character varying,
    "bio" text,
    "last_login" TIMESTAMP,
    "provider" character varying,
    "social_links" json,
    CONSTRAINT "PK_eee360f3bff24af1b6890765201" PRIMARY KEY ("user_id")
);

CREATE TABLE "user_activity" (
    "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "user_id" character varying NOT NULL,
    "resource" character varying NOT NULL,
    "resource_id" character varying NOT NULL,
    "activity_type" character varying NOT NULL,
    "activity_timestamp" TIMESTAMP NOT NULL DEFAULT now(),
    CONSTRAINT "PK_daec6d19443689bda7d7785dff5" PRIMARY KEY ("id")
);

CREATE TABLE "badge" (
    "badge_id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "name" character varying NOT NULL,
    "description" text,
    "criteria_type" character varying NOT NULL,
    "criteria_value" integer NOT NULL,
    "icon_url" character varying,
    CONSTRAINT "PK_c77f5118dd4ede320359aa4018a" PRIMARY KEY ("badge_id")
);

CREATE TABLE "user_reward" (
    "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "points_scored" integer NOT NULL DEFAULT '0',
    "streak" integer NOT NULL DEFAULT '0',
    "user_id" uuid,
    "badge_id" uuid,
    CONSTRAINT "PK_870b280d018d4f7520abec33561" PRIMARY KEY ("id")
);

CREATE TABLE "role" (
    "role_id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "title" character varying NOT NULL,
    "description" text,
    "permissions" json NOT NULL,
    CONSTRAINT "PK_df46160e6aa79943b83c81e496e" PRIMARY KEY ("role_id")
);

CREATE TABLE "permission" (
    "permission_id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "action" character varying NOT NULL,
    "resource" character varying NOT NULL,
    CONSTRAINT "PK_aaa6d61e22fb453965ae6157ce5" PRIMARY KEY ("permission_id")
);

CREATE TABLE "report" (
    "report_id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "resource" character varying NOT NULL,
    "resource_id" character varying NOT NULL,
    "reported_by" character varying NOT NULL,
    "reason" text NOT NULL,
    "status" character varying NOT NULL DEFAULT 'open',
    "created_at" TIMESTAMP NOT NULL DEFAULT now(),
    "resolved_by" character varying,
    "resolved_at" TIMESTAMP,
    CONSTRAINT "PK_1bdd9ab86f1a920d365961cb28c" PRIMARY KEY ("report_id")
);

CREATE TABLE "discussion" (
    "discussion_id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "title" character varying NOT NULL,
    "linked_article_id" character varying,
    "linked_category_id" character varying,
    "created_at" TIMESTAMP NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
    "is_locked" boolean NOT NULL DEFAULT false,
    CONSTRAINT "PK_766abc0fa391addc66aa2c547c9" PRIMARY KEY ("discussion_id")
);

CREATE TABLE "comment" (
    "comment_id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "parent_comment_id" character varying,
    "content" text NOT NULL,
    "created_at" TIMESTAMP NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
    "is_deleted" boolean NOT NULL DEFAULT false,
    "is_edited" boolean NOT NULL DEFAULT false,
    "upvotes_count" integer NOT NULL DEFAULT '0',
    "downvotes_count" integer NOT NULL DEFAULT '0',
    "discussionDiscussionId" uuid,
    "createdByUserId" uuid,
    CONSTRAINT "PK_6a9f9bf1cf9a09107d3224a0e9a" PRIMARY KEY ("comment_id")
);

CREATE TABLE "category" (
    "category_id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "name" character varying NOT NULL,
    "description" text,
    "parent_category_id" character varying,
    CONSTRAINT "PK_cc7f32b7ab33c70b9e715afae84" PRIMARY KEY ("category_id")
);

CREATE TABLE "article_version" (
    "version_id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "article_id" character varying NOT NULL,
    "content_delta" text NOT NULL,
    "version_number" integer NOT NULL,
    "git_url" character varying NOT NULL,
    "created_by" character varying NOT NULL,
    "created_at" TIMESTAMP NOT NULL DEFAULT now(),
    "reason_for_update" character varying,
    CONSTRAINT "PK_6aeacf2f14274823469e0017f82" PRIMARY KEY ("version_id")
);

CREATE TYPE "public"."article_status_enum" AS ENUM('draft', 'published', 'archived');

CREATE TABLE "article" (
    "article_id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "title" character varying NOT NULL,
    "content" text NOT NULL,
    "status" "public"."article_status_enum" NOT NULL DEFAULT 'draft',
    "author_id" uuid NOT NULL,
    "created_at" TIMESTAMP NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
    "published_at" TIMESTAMP,
    "category_id" uuid,
    CONSTRAINT "PK_962ab3ae47140b8d85c11cb84ab" PRIMARY KEY ("article_id")
);

ALTER TABLE "user_profile" ADD CONSTRAINT "FK_eee360f3bff24af1b6890765201" FOREIGN KEY ("user_id") REFERENCES "user"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE "user_reward" ADD CONSTRAINT "FK_e1af1d9aa9a9f2483339a7fd681" FOREIGN KEY ("user_id") REFERENCES "user"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE "user_reward" ADD CONSTRAINT "FK_1b4d9d1841577380a65cb446458" FOREIGN KEY ("badge_id") REFERENCES "badge"("badge_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE "comment" ADD CONSTRAINT "FK_a76e012eaa50ebdd7c05a57fb35" FOREIGN KEY ("discussionDiscussionId") REFERENCES "discussion"("discussion_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE "comment" ADD CONSTRAINT "FK_c05bb6dfa077f32115b9d5265bb" FOREIGN KEY ("createdByUserId") REFERENCES "user"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE "article" ADD CONSTRAINT "FK_16d4ce4c84bd9b8562c6f396262" FOREIGN KEY ("author_id") REFERENCES "user"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE "article" ADD CONSTRAINT "FK_cdd234ef147c8552a8abd42bd29" FOREIGN KEY ("category_id") REFERENCES "category"("category_id") ON DELETE NO ACTION ON UPDATE NO ACTION;
