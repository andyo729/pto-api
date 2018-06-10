import { connect, model, Schema } from 'mongoose';
connect('mongodb://mongodb:27017/myapp')
  .then(() => console.log('g2g'), () => console.log('oh no'));

const catSchema = new Schema({ name: String });
const cat = model('Cat', catSchema);

const kitty = new cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));
