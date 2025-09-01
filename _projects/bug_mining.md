---
layout: page
title: Bug Mining
description: Because mining real-world reproducible bugs is hard.
img: assets/img/bugs.png
importance: 2
category: active
---

   <div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/bugs.png" title="Bugs" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Mining reproducible bugs from real-world projects is difficult. Differing build systems, explicit and implicit dependencies, different versions of the underlying programming language, etc. all present challenges.

<a href="https://defects4j.org/">Defects4J</a> is a collection of reproducible Java bugs from real-world projects which is widely used in evaluations in the software engineering research community for applications such as automatic program repair.
I have been improving the bug-mining infrastructure in Defects4J to utilize a project's original build system to reduce loss of bugs due to build issues as well as adding more support for rapid and automatic resolution of build issues. Additionally, I have been migrating Defects4J away from ant to native java and javac build and execution targets for mined projects to support more customized set-ups for software engineering researchers using Defects4J.
