---
layout: page
title: Mutant Explanations
description: Because understanding even a small program change is hard.
img: assets/img/mutant.png
importance: 2
category: active
---

Mutation analysis is a way to evaluate the quality of a test suite. A small change (mutant) is made to a program and you see if the test suite fails on the mutated code.

   <div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/mutant.png" title="Mutant" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    An example mutant. The code is changed from initializing the variable trian from 0 to 1.
</div>

Mutation testing is a process to improve the quality of a test suite. Mutants that a test suite did not catch are presented to a developer and the developer needs to try to write a test that will catch the mutant. But understanding how the mutant affects the code and understanding how to write a test that will both trigger and can observe the difference can be hard! We are investigating how we can make both understanding the difference and writing a test case easier. 

Check out our investigations on how scaffolding and visualizations can support understanding mutation testing in an educational setting in our FSE 2025 paper (coming soon)!
