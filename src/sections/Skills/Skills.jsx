import React from 'react'
import styles from './SkillsStyles.module.css'
import SkillList from './SkillList'

import python from '../../skillsLogos/programmingLanguages/python.png'
import c from '../../skillsLogos/programmingLanguages/c.png'
import cpp from '../../skillsLogos/programmingLanguages/cpp.png'
import java from '../../skillsLogos/programmingLanguages/java.png'
import html from '../../skillsLogos/programmingLanguages/html.png'
import css from '../../skillsLogos/programmingLanguages/css.png'
import javascript from '../../skillsLogos/programmingLanguages/javascript.png'
import rust from '../../skillsLogos/programmingLanguages/rust.png'
import go from '../../skillsLogos/programmingLanguages/go.png'
import bash from '../../skillsLogos/programmingLanguages/bash.png'

import mysql from '../../skillsLogos/databases/mysql.png'
import postgresql from '../../skillsLogos/databases/postgresql.png'
import mongodb from '../../skillsLogos/databases/mongodb.png'
import duckdb from '../../skillsLogos/databases/duckdb.png'

import react from '../../skillsLogos/frameworks/react.png'
import node from '../../skillsLogos/frameworks/node.png'
import langchain from '../../skillsLogos/frameworks/langchain.png'
import ollama from '../../skillsLogos/frameworks/ollama.png'
import tableau from '../../skillsLogos/frameworks/tableau.png'
import apachecamel from '../../skillsLogos/frameworks/apachecamel.png'
import springboot from '../../skillsLogos/frameworks/springboot.png'
import django from '../../skillsLogos/frameworks/django.png'
import gradio from '../../skillsLogos/frameworks/gradio.png' 

import git from '../../skillsLogos/developerTools/git.png'
import aws from '../../skillsLogos/developerTools/aws.png'
import androidStudio from '../../skillsLogos/developerTools/androidStudio.png'

import tensorflow from '../../skillsLogos/MLDLStack/tensorflow.png'
import keras from '../../skillsLogos/MLDLStack/keras.png'
import pytorch from '../../skillsLogos/MLDLStack/pytorch.png'
import opencv from '../../skillsLogos/MLDLStack/opencv.png'
import scikit from '../../skillsLogos/MLDLStack/scikit-learn.png'
import numpy from '../../skillsLogos/MLDLStack/numpy.png'
import pandas from '../../skillsLogos/MLDLStack/pandas.png'

import blender from '../../skillsLogos/graphicsSoftware/blender.png'
import gimp from '../../skillsLogos/graphicsSoftware/gimp.png'

function Skills() {
  return (
    <section id="skills" className={styles.container}>
        <h1 className={styles.sectionTitle} id="skillHeading">Skills</h1>
        <div className={styles.skillList}>
            <div className={styles.skillList}>
                <h3 className={styles.skillTitle}>Programming Languages</h3>
                {/* Python, C/C++, Java, JavaScript, HTML, CSS, Bash, Go, Rust */}
                <div className={styles.skills}>
                    <SkillList src={python} skill="Python"/>
                    <SkillList src={c} skill="C"/>
                    <SkillList src={cpp} skill="C++"/>
                    <SkillList src={java} skill="Java"/>
                    <SkillList src={html} skill="HTML"/>
                    <SkillList src={css} skill="CSS"/>
                    <SkillList src={javascript} skill="JavaScript"/>
                    <SkillList src={bash} skill="Bash"/>
                    <SkillList src={go} skill="Go"/>
                    <SkillList src={rust} skill="Rust"/>
                </div>
                <hr />
            </div>

            <div className={styles.skillList}>
                <h3 className={styles.skillTitle}>Tools & Frameworks</h3>
                <div className={styles.skills}>
                    <SkillList src={react} skill="React.js"/>
                    <SkillList src={node} skill="Node.js"/>
                    <SkillList src={langchain} skill="LangChain"/>
                    <SkillList src={ollama} skill="Ollama"/>
                    <SkillList src={tableau} skill="Tableau"/>
                    <SkillList src={apachecamel} skill="Apache Camel"/>
                    <SkillList src={springboot} skill="Spring Boot"/>
                </div>
                <hr />
            </div>

            <div className={styles.skillList}>
                <h3 className={styles.skillTitle}>ML Stack</h3>
                <div className={styles.skills}>
                    <SkillList src={pytorch} skill="PyTorch"/>
                    <SkillList src={tensorflow} skill="TensorFlow"/>
                    <SkillList src={keras} skill="Keras"/>
                    <SkillList src={opencv} skill="OpenCV"/>
                    <SkillList src={scikit} skill="Scikit-Learn"/>
                    <SkillList src={numpy} skill="Numpy"/>
                    <SkillList src={pandas} skill="Pandas"/>
                </div>
                <hr />
            </div>

            <div className={styles.skillList}>
                <h3 className={styles.skillTitle}>Databases</h3>
                <div className={styles.skills}>
                    <SkillList src={mysql} skill="MySQL"/>
                    <SkillList src={postgresql} skill="PostGreSQL"/>
                    <SkillList src={mongodb} skill="MongoDB"/>
                    <SkillList src={duckdb} skill="DuckDB"/>
                </div>
                <hr />
            </div>

            <div className={styles.skillList}>
                <h3 className={styles.skillTitle}>Cloud & DevOps</h3>
                <div className={styles.skills}>
                    <SkillList src={git} skill="Git"/>
                    <SkillList src={aws} skill="AWS"/>
                </div>
                <hr />
            </div>

            {/* <div className={styles.skillList}>
                <h3 className={styles.skillTitle}>Graphics Softwares</h3>
                <div className={styles.skills}>
                    <SkillList src={blender} skill="Blender"/>
                    <SkillList src={gimp} skill="GIMP"/>
                </div>
            </div> */}

{/* Programming Languages: Python, C/C++, Java, JavaScript, HTML, CSS, Bash, Go, Rust
Tools & Frameworks: React, Node.js, LangChain, Ollama, Tableau, Apache Camel, Spring Boot
ML Stack: PyTorch, Keras, TensorFlow, Scikit-Learn, OpenCV, Numpy, Pandas
Databases: MySQL, PostGreSQL, DuckDB, MongoDB
Cloud & DevOps: AWS, Git */}

        </div>
    </ section>
  )
}

export default Skills