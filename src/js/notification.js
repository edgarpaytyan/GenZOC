const onFinish = new Notification('EFI Created Succesful', {
    body: 'We have created the EFI at ',
});

onFinish.onclick = () => {
    onFinish.close;
};
