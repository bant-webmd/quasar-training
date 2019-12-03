<template>
	<!-- <q-card style="width: 300px;"> -->
    <q-card style="width: 300px;">
		<q-card-section class="row">
			<div class="text-h6">Add Task</div>
			<q-space></q-space>
			<q-btn round flat v-close-popup dense icon="close" />
		</q-card-section>
		<q-form ref="myForm" @submit="submitForm">
			<q-card-section>
				<div class="q-mb-sm">
					<q-input label="Task name" clearable outlined autofocus v-model="taskToSubmit.name" :rules="[val => !!val || 'Field is required']"/>
				</div>

				<div class="q-mb-sm">
					<q-input label="Due date" outlined v-model="taskToSubmit.dueDate">
						<template v-slot:append>
							<q-icon name="event" class="cursor-pointer">
								<q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
									<q-date v-model="taskToSubmit.dueDate" @input="() => $refs.qDateProxy.hide()" />
								</q-popup-proxy>
							</q-icon>
                            <q-icon name="close" v-if="taskToSubmit.dueDate" @click="clearDueDate" class="cursor-pointer" />
						</template>
					</q-input>
				</div>

				<div class="q-mb-sm" v-if="taskToSubmit.dueDate">
					<q-input style="width: 100%;" label="Due time" clearable outlined v-model="taskToSubmit.dueTime">
						<template v-slot:append>
							<q-icon name="access_time" class="cursor-pointer">
								<q-popup-proxy transition-show="scale" transition-hide="scale">
									<q-time v-model="taskToSubmit.dueTime" />
								</q-popup-proxy>
							</q-icon>
						</template>
					</q-input>
				</div>
			</q-card-section>

			<q-card-actions align="right">
				<q-btn type="submit" flat label="Save" color="primary"/>
			</q-card-actions>
		</q-form>
	</q-card>
</template>

<script>
import { mapActions } from 'vuex';

export default {
	data() {
		return {
			taskToSubmit: {
				name: "",
				dueDate: "",
				dueTime: "",
				completed: false
			}
		};
    },
    methods: {
        ...mapActions('tasks', ['addTask']),
        submitForm() {
            this.$refs.myForm.validate().then(success => {
                if (success) {
                    // yay, models are correct
                    console.log("Form Submitted and is valid");
                    this.submitTask(this.taskToSubmit);
                }
                else {
                    // oh no, user has filled in
                    // at least one invalid value
                }
            })
        },
        submitTask(task) {            
            this.addTask(task);
            this.$emit('close');
            console.log("Submitted Task to the store");
        },
        clearDueDate() {
            this.taskToSubmit.dueDate = '';
            this.taskToSubmit.dueTime = '';
        }
    }
};
</script>