'use strict';
require('../models/topic.model.js');

const mongoose = require('../config/mongoose.config');
const Topic = mongoose.model('Topic');

var topics = [
      {
        topicName : '总经办',
        description : 'High-level, dynamic, untyped, and interpreted programming language',
        effect:'effect-marley',
        img : "http://tympanus.net/Development/HoverEffectIdeas/img/17.jpg",
      },
      {
        topicName : '行政办公室',
        description : 'Dynamic, reflective, object-oriented, general-purpose programming language',
        effect:'effect-jazz',
        img : "http://tympanus.net/Development/HoverEffectIdeas/img/2.jpg",
      },
      {
        topicName : '财务部',
        description : ' Middle-level programming language developed by Bjarne Stroustrup starting in 1979 at Bell Labs',
        effect:'effect-sadie',
        img : "http://tympanus.net/Development/HoverEffectIdeas/img/25.jpg",
      },
      {
        topicName : '营销部',
        description : ' A general-purpose computer programming language that is concurrent, class-based, object-oriented',
        effect:'effect-romeo',
        img : "http://tympanus.net/Development/HoverEffectIdeas/img/12.jpg",
      },
      {
        topicName : '工程部',
        description : 'A widely used high-level, general-purpose, interpreted, dynamic programming language',
        effect:'effect-ming',
        img : "http://tympanus.net/Development/HoverEffectIdeas/img/9.jpg",
      },
      {
        topicName : '保安部',
        description : 'A general-purpose, object-oriented programming language',
        effect:'effect-apollo',
        img : "http://tympanus.net/Development/HoverEffectIdeas/img/18.jpg",
      },
      {
        topicName : '客房部',
        description : 'A general-purpose, object-oriented programming language',
        effect:'effect-romeo',
        img : "http://tympanus.net/Development/HoverEffectIdeas/img/11.jpg",
      },
      {
        topicName : '管家部',
        description : 'A general-purpose, object-oriented programming language',
        effect:'effect-sadie',
        img : "http://tympanus.net/Development/HoverEffectIdeas/img/13.jpg",
      },
      {
        topicName : '餐饮部',
        description : 'A general-purpose, object-oriented programming language',
        effect:'effect-jazz',
        img : "http://tympanus.net/Development/HoverEffectIdeas/img/5.jpg",
      },
      {
        topicName : '餐饮部后厨',
        description : 'A general-purpose, object-oriented programming language',
        effect:'effect-marley',
        img : "http://tympanus.net/Development/HoverEffectIdeas/img/9.jpg",
      }
    ];


function init(){
  Topic.find({}, function(err, data){
    if(err) console.log(err);
    else{
      if(data.length === 0) {
      console.log("start to initialize the topic table");

        topics.map((topic) => {
          let t = new Topic(topic);
          t.save(function(err, response){
            if(err) console.log(err);
            console.log("insert successfully", response._id);
          });
        });
      }
    }
  });
};

module.exports = init;