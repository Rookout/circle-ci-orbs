# Rookout Orb

The rookout circle-ci orb allows you debug your own nodeJS scripts running in your circle-ci jobs.

## How to use rookout-node circle-ci orb:

1. Specify your ROOKOUT_TOKEN in your circle-ci project Environment Variables

2. Import rookout-node orb:
    ```
    orbs:
      rookout-node: circleci/rookout-node@0.0.2
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

    **Optional Tags**:

    you can specify rook tags in the following way:

    ```
    - rookout-node/run_script:
              users_script: %YOUR_NODE_COMMAND%
              rookout_tags: "yourTag1;YourTag2"
    ```
    
    The default tags value is: '$CIRCLE_PROJECT_REPONAME;$CIRCLE_JOB;circle-ci'


### Circleci-orb
https://circleci.com/orbs/registry/orb/rookout/rookout-node