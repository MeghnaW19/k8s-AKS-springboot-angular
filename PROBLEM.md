## Exercise: Deploy an Angular SPA that communicates with a Spring Boot application on K8s Cluster in Azure AKS.

* In this exercise, you will deploy an Angular SPA that communicates with a Spring Boot application on K8s Cluster in Azure AKS.

This exercise contains following folders:  

	- AngularFrontend - This is an Angular SPA
	- k8s - A folder that contains manifest files
	- SbService - This is a Spring Boot application

This exercise contains following files in k8s folder: 

	- angular.yml - This is to create the Deployment and a Service of type LoadBalancer for the Angular SPA.
	- configmap.yml - This is to create a ConfigMap.
	- secret.yml - This is to create a Secret.
	- mysql.yml - This is to create a MySQL Deployment. It also configures a PersistentVolume(PV), PersistentVolumeClaim(PVC) and a service of type ClusterIP for MySQL.
	- springboot.yml - This is to create the Deployment and a Service of type LoadBalancer for Spring Boot application.


**Note**: You need to go through the comments thoroughly and complete the exercise.

Understand and perform following steps to complete this exercise:

	1. Verify that the AKS cluster is created and ready.
	2. Modify the properties in `application.yml` of `SbService`. Push the SbService image to Docker Hub.
	3. Implement `configmap.yml` to define a ConfigMap.
	4. Implement `secret.yml` file to define a secret.
	5. Implement `mysql.yml` file.
	6. Implement `springboot.yml` file.
	7. Test in Postman the functionalities to create, read and update users.
	8. Make changes in `environments/environment.ts` file of AngularFrontend, change API as follows `<external-ip-of-SbService>:<port>/api/v1/`.
	10. Build AngularFrontend, use command `ng build`, push AngularFrontend image to Docker Hub.
	11. Implement `angular.yml` file to define the deployment, service of type LoadBalancer for Angular SPA.
	12. Test the Angular SPA.

### Instructions

- Take care of whitespace/trailing whitespace
- Do not change the provided code unless instructed
- Ensure your code compiles without any errors/warning/deprecations
- Follow best practices while coding
