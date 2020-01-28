# README #

On Git Workflow
http://reinh.com/blog/2009/03/02/a-git-workflow-for-agile-teams.html

 - git checkout -b INITIALS_BRANCH_DESCRIPTION
 - git commit // Multiple times
 - git rebase -i origin/master // Compress down all the commits into a single one.  Pick first line, squash rest
 - git checkout master
 - git merge INITIALS_BRANCH_DESCRIPTION
 - git push origin master // Send everything back to github

Why Git?
https://www.atlassian.com/agile/software-development/git

Trello Board location: https://trello.com/b/dTYGFKch/alli-board

Google Drive location: TBD