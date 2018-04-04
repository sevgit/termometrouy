import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/userModel';

require('dotenv').config();

export const createUser = (req, res, next) => {
  const {
    name, email, password, company,
  } = req.body;

  if (!name || !email || !password || !company) {
    return res.status(409).json({
      message: 'missing details',
    });
  }
  User.find({ email })
    .exec()
    .then((user) => {
      if (user.length >= 1) {
        return res.status(409).json({
          message: 'Mail exists',
        });
      }
      bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
          return res.status(500).json({ error: err });
        }
        const user = new User({
          name,
          email,
          password: hash,
          company,
        });

        user.save((error) => {
          console.log(`user saved: \n Name: ${user.name} \n password: ${user.password} \n email: ${user.email} \n company: ${user.company}`);
          if (error) console.log(error);
        });
        res.status(201).json({
          message: 'User created',
        });
      });
    });
};

export const logUserIn = (req, res, next) => {
  User.findOne({ email: req.body.email })
    .exec()
    .then((user) => {
      if (!user) {
        return res.status(401).json({ message: 'Mail not found' });
      }
      bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (err) {
          return res.status(401).json({ message: 'Auth failed, ERROR' });
        }
        if (result) {
          const token = jwt.sign(
            {
              email: user.email,
              userId: user._id,
            }, process.env.SECRET,
            {
              expiresIn: '1hr',
            },
          );
          return res.status(201).json({
            message: 'Auth successful',
            token,
          });
        }
        res.status(401).json({ message: 'Wrong pw' });
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

export const retrieveUser = (req, res) => {
  User.findOne({ name: req.body.name }, (err, user) => {
    if (err) console.log(err);
    if (!user) {
      res.send('User not found');
    } else {
      res.json(user);
    }
  });
};
