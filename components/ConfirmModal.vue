<template>
    <section>
        <div class="buttons">
            <b-button
                label="Launch confirm (default)"
                type="is-info"
                size="is-medium"
                @click="confirm" />

            <b-button
                label="Launch confirm (custom)"
                type="is-info"
                size="is-medium"
                @click="confirmCustom" />

            <b-button
                label="Launch confirm (custom)"
                type="is-danger"
                size="is-medium"
                @click="confirmCustomDelete" />
        </div>
    </section>
</template>

<script>
    export default {
        methods: {
            confirmCustomDelete() {
                this.$buefy.dialog.confirm({
                    title: 'Deleting signal',
                    message: 'Are you sure you want to <b>delete</b> the signal? This action cannot be undone.',
                    confirmText: 'Delete Signal',
                    type: 'is-danger',
                    hasIcon: true,
                    onConfirm: () => this.$buefy.toast.open('Account deleted!')
                })
            }
        }
    }
</script>
