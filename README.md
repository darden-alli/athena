# README #
http://reinh.com/blog/2009/03/02/a-git-workflow-for-agile-teams.html

 - git checkout -b NUMBER_BRANCH_DESCRIPTION
 - git commit // Multiple times
 - git rebase -i origin/master // Compress down all the commits into a single one.  Pick first line, squash rest
 - git checkout master
 - git merge NUMBER_BRANCH_DESCRIPTION
 - git push origin master // Send everything back to github