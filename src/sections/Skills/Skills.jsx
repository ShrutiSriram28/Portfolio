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
import sql from '../../skillsLogos/programmingLanguages/sql.png'
import rust from '../../skillsLogos/programmingLanguages/rust.png'
import bash from '../../skillsLogos/programmingLanguages/bash.png'


import react from '../../skillsLogos/frameworks/react.png'
import node from '../../skillsLogos/frameworks/node.png'
import django from '../../skillsLogos/frameworks/django.png'
import gradio from '../../skillsLogos/frameworks/gradio.png' 

import git from '../../skillsLogos/developerTools/git.png'
import androidStudio from '../../skillsLogos/developerTools/androidStudio.png'

import tensorflow from '../../skillsLogos/MLDLStack/tensorflow.png'
import keras from '../../skillsLogos/MLDLStack/keras.png'
import pytorch from '../../skillsLogos/MLDLStack/pytorch.png'

import blender from '../../skillsLogos/graphicsSoftware/blender.png'
import gimp from '../../skillsLogos/graphicsSoftware/gimp.png'

function Skills() {
  return (
    <section id="skills" className={styles.container}>
        <h1 className={styles.sectionTitle} id="skillHeading">Skills</h1>
        <div className={styles.skillList}>
            <div className={styles.skillList}>
                <h3 className={styles.skillTitle}>Programming Languages</h3>
                <div className={styles.skills}>
                    <SkillList src={python} skill="Python"/>
                    <SkillList src={c} skill="C"/>
                    <SkillList src={cpp} skill="C++"/>
                    <SkillList src={java} skill="Java"/>
                    <SkillList src={html} skill="HTML"/>
                    <SkillList src={css} skill="CSS"/>
                    <SkillList src={javascript} skill="JavaScript"/>
                    <SkillList src={sql} skill="SQL"/>
                    <SkillList src={rust} skill="Rust"/>
                    <SkillList src={bash} skill="Bash"/>
                </div>
                <hr />
            </div>

            <div className={styles.skillList}>
                <h3 className={styles.skillTitle}>Frameworks</h3>
                <div className={styles.skills}>
                    <SkillList src={react} skill="React.js"/>
                    <SkillList src={node} skill="Node.js"/>
                    <SkillList src={django} skill="Django"/>
                    <SkillList src={gradio} skill="Gradio"/>
                </div>
                <hr />
            </div>

            <div className={styles.skillList}>
                <h3 className={styles.skillTitle}>Developer Tools</h3>
                <div className={styles.skills}>
                    <SkillList src={git} skill="Git"/>
                    <SkillList src={androidStudio} skill="Android Studio"/>
                </div>
                <hr />
            </div>

            <div className={styles.skillList}>
                <h3 className={styles.skillTitle}>ML/DL Stack</h3>
                <div className={styles.skills}>
                    <SkillList src={tensorflow} skill="TensorFlow"/>
                    <SkillList src={keras} skill="Keras"/>
                    <SkillList src={pytorch} skill="PyTorch"/>
                </div>
                <hr />
            </div>

            <div className={styles.skillList}>
                <h3 className={styles.skillTitle}>Graphics Softwares</h3>
                <div className={styles.skills}>
                    <SkillList src={blender} skill="Blender"/>
                    <SkillList src={gimp} skill="GIMP"/>
                </div>
            </div>
        </div>
    </ section>
  )
}

export default Skills