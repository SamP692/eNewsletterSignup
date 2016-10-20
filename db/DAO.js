const db = require('./db');
const newEmail = require('./sqlProvider');

class SubmissionDAO {
  static create({ name, email }) {
    return db.one(newEmail.create, [body, user_id])
             .then((data) => new Chirp(data));
  }
}
