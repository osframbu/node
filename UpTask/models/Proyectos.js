const { Sequelize } = require('sequelize');
const Seculize = require('sequelize');
const db=require('../config/db');
const slug=require('slug');
const shortid=require('shortid');
const Proyectos =db.define('proyectos',{
    id:{
        type:Seculize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    nombre:{
        type:Seculize.STRING
    },
    url:{
      type:Sequelize.STRING  
    }
},{
    hooks:{
        beforeCreate(proyecto){
            const url =slug(proyecto.nombre).toLowerCase();
            
            proyecto.url=`${url}-${shortid.generate()}`
        }
    }
})

module.exports =Proyectos;