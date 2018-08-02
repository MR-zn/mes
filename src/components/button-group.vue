<template>
    <div class="g-button-group">
        <slot></slot>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
    .g-button-group {
        display: inline-flex;
        vertical-align: middle;
        justify-content: center;
    }

    .g-button-group .g-button {
        border-radius: 0;
        margin-left: -1px;
    }

    .g-button-group .g-button:first-child {
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
    }

    .g-button-group .g-button:last-child {
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
    }

    .g-button-group .g-button:hover {
        position: relative;
        z-index: 1;
    }


</style>

