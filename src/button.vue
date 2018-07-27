<template>
    <button class="g-button">
        <slot></slot>
    </button>
</template>

<script>
export default {};
</script>


<style>
.g-button {
    font-size: 14px;
    height: 32px;
    padding: 0 1em;
    border-radius: 4px;
    border: 1px solid #777;
    background: #fff;
    transition: all 0.2s;
    cursor: pointer;
}

.g-button:hover {
    border-color: #666;
    border: 1px solid #999;
}

.g-button:active {
    background-color: #eee;
}

.g-button:focus {
    outline: none;
}
</style>