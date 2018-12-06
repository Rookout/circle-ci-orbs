How to use rookout-node circle-ci orb:

1. Specify the ROOKOUT_TOKEN in your project Environment Variables

2. Import rookout-node orb:
```
orbs:
  rookout-node: circleci/rookout-node@0.0.1
```

3. Call the run_script command:

```
jobs:
  my_job:
    docker:
      - image: circleci/node:10
    steps:
      - rookout-node/run_script:
          users_script: %YOUR_NODE_COMMAND%

```

4. Oprional Tags:
you can specify rook tags in the following way:
```
- rookout-node/run_script:
          users_script: ~/Rookout/test1.js param1 param2     
		  rookout_tags: "yourTag1;YourTag2"
```
The default tags value is: '$CIRCLE_PROJECT_REPONAME;$CIRCLE_JOB;circle-ci'
