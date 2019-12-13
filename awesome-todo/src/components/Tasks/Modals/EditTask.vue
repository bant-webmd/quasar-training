<template>
	<!-- <q-card style="width: 300px;"> -->
    <q-card style="width: 300px;">
		<modal-header>Edit Task</modal-header>
		<q-form ref="myForm" @submit="submitForm">
			<q-card-section>
				<modal-task-name
					:name.sync="taskToSubmit.name"
				></modal-task-name>

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
import ModalHeader from './Shared/ModalHeader.vue';
import ModalTaskName from './Shared/ModalTaskName.vue';

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
	props: ['id', 'task'],
	components: {
		'modal-header': ModalHeader,
		'modal-task-name': ModalTaskName
	},
    methods: {
        ...mapActions('tasks', ['updateTask']),
        submitForm() {
            this.$refs.myForm.validate().then(success => {
                if (success) {
                    // console.log("Form Submitted and is valid");
                    this.submitTask(this.taskToSubmit);
                }
                else {
                    // oh no, user has filled in
                    // at least one invalid value
                }
            })
        },
        submitTask(task) {            
            this.updateTask({
				id: this.id,
				updates: task 
			});
            this.$emit('close');
            // console.log("Submitted Task to the store");
        },
        clearDueDate() {
            this.taskToSubmit.dueDate = '';
            this.taskToSubmit.dueTime = '';
        }
	},
	mounted() {
		this.taskToSubmit = Object.assign({}, this.task);
	}
};
</script>