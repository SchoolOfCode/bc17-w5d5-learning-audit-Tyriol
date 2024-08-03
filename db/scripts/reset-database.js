









// CREATE TABLE "modules" (
//     "id" INTEGER PK,
//     "module_name" VARCHAR(50)
//   );
  
//   CREATE TABLE "learnings" (
//     "id" INTEGER PK,
//     "learning_name" VARCHAR(50),
//     "module_id" INTEGER FK,
//     "rag_status" VARCHAR(5),
//     "learning_notes" VARCHAR(255),
//     CONSTRAINT "FK_learnings.learning_name"
//       FOREIGN KEY ("learning_name")
//         REFERENCES "modules"("id")
//   );