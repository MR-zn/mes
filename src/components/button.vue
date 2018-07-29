<template>
    <button class="g-button" v-bind:class="[`${icon}`,{[`icon-${iconPosition}`]: true}]">
        <p>
            <slot></slot>
        </p>
    </button>
</template>

<script>
export default {
    props: {
        icon: {},
        iconPosition: {
            type: String,
            default: 'left',
            validator (value) {
                return value === 'left' || value === 'right'
            }
        }
    }
}
</script>


<style>
@import url(https://use.fontawesome.com/releases/v5.2.0/css/all.css);

.g-button {
    font-size: 14px;
    height: 32px;
    padding: 0 1em;
    border-radius: 4px;
    border: 1px solid #777;
    background: #fff;
    transition: all 0.2s;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
}

.g-button:before {
    order: 1;
    margin-right: 0.1em;
}

.g-button p {
    order: 2;
}

.icon-right:before {
    order: 2;
    margin-right: 0;
    margin-left: 0.1em;
}

.icon-right p {
    order: 1;
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

.g-button:before {
    font-size: 1em;
    margin: 0.25em;
}

@keyframes spin {
    0% {transform: rotate(0deg);}
    100% {transform: rotate(360deg);}
}

.fa-spinner:before {
    animation: spin 1s infinite linear;
}
</style>