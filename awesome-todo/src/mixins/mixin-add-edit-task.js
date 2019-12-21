import ModalHeader from '../components/Tasks/Modals/Shared/ModalHeader.vue';
import ModalTaskName from '../components/Tasks/Modals/Shared/ModalTaskName.vue';

export default {
    components: {
		'modal-header': ModalHeader,
		'modal-task-name': ModalTaskName
    },
    methods: {
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
        clearDueDate() {
            this.taskToSubmit.dueDate = '';
            this.taskToSubmit.dueTime = '';
        }
    }
}