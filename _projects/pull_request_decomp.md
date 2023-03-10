---
layout: page
title: Pull Request Decomposition
description: Because reviewing pull requests is hard.
img: assets/img/pull_request.png
importance: 2
category: thinking about
---

   Pull requests can have long and complicated changes, tangling multiple concepts together.
    However, standard pull request review interfaces often show these changes
    as a series of diff hunks, shown according to the alphabetical ordering of files
    that contain the changes. Can this really be the most effective way to present information
    critical to performing good code reviews? We are investigating decomposing tangled change sets in pull requests
    to support good code reviews.

I collaborated with <a href="https://thomsch.github.io/">Thomas Schweizer</a> on this project.

   <div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/pull_request.png" title="Pull Request View of Code" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    An example of the display that GitHub shows for viewing source files during a code review. The top set of changes are a bug fix whereas the bottom set of changes are a feature addition. Perhaps decomposing the pull request to separate these two sets of changes would make reviewing the code easier.
</div>

