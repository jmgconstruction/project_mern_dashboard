import { Box, Typography, FormControl, FormHelperText, TextField, TextareaAutosize, Stack, Select, MenuItem, Button } from '@pankod/refine-mui';

import { FormProps } from 'interfaces/common';
import CustomButton from './CustomButton';

const Form = ({ type, register, handleSubmit, handleImageChange, formLoading, onFinishHandler, propertyImage }: FormProps) => {
  return (
    <Box>
      <Typography fontSize={30} fontWeight={700} color="#424242">
        {type} a Property
      </Typography>

      <Box mt={2.5} borderRadius="15px" padding="20px" bgcolor="#fcfcfc">
        <form style={{ marginTop: '20px', width: '100%', display: 'flex', flexDirection: 'column', gap:'20px'}}
        onSubmit={handleSubmit(onFinishHandler)}
        >
          <FormControl>
  <FormHelperText sx={{ fontWeight: 500, margin: '10px 0', fontSize: 16, color: '#424242' }}>Enter property name</FormHelperText>
  <TextField 
    fullWidth
    required
    id="outlined-basic"
    color="info"
    placeholder="Write Property Name"
    variant="outlined"
    {...register('title', { required: true })}
    InputProps={{
      sx: {
        fontSize: 16,
        padding: '10px',
        color: '#424242',
        backgroundColor: '#ffffff',
        '&::placeholder': {
          color: '#424242',
          borderColor: 'rgba(0,0,0,0.23)', borderRadius: 6,
          opacity: 0.5,
        },
      },
    }}
  />
</FormControl>
          <FormControl>
            <FormHelperText sx={{ fontWeight: 500, margin: '10px 0', fontSize: 16, color: '#11142d'}}>Enter Description</FormHelperText>
            <TextareaAutosize 
              minRows={5}
              required
              placeholder="Write description"
              color="info"
              style={{ width: '100%', background: 'transparent', fontSize: '16px', borderColor: 'rgba(0,0,0,0.23)', borderRadius: 6, padding: 10, color: '#919191'}}
              {...register('description', { required: true})}
            />
          </FormControl>

          <Stack direction="row" gap={4}>
          <FormControl sx={{ flex: 1 }}>
  <FormHelperText sx={{
    fontWeight: 500,
    margin: '10px 0',
    fontSize: 16,
    color: '#11142d' 
  }}>
    Select Property Type
  </FormHelperText>
  <Select
    variant="outlined"
    color="info"
    displayEmpty
    required
    inputProps={{ 'aria-label': 'Without label' }}
    defaultValue=""
    {...register('propertyType', { required: true})}
  >
    <MenuItem value="" disabled>Select an option</MenuItem>
    <MenuItem value="Apartment">Apartment</MenuItem>
    <MenuItem value="Villa">Villa</MenuItem>
    <MenuItem value="Farmhouse">Farmhouse</MenuItem>
    <MenuItem value="Condos">Condos</MenuItem>
    <MenuItem value="Townhouse">Townhouse</MenuItem>
    <MenuItem value="Duplex">Duplex</MenuItem>
    <MenuItem value="Studio">Studio</MenuItem>
    <MenuItem value="Chalet">Chalet</MenuItem>
    <MenuItem value="Condominiums">Condominiums</MenuItem>
    <MenuItem value="Single-detached houses">Single-detached houses</MenuItem>
    <MenuItem value="Commercial building">Commercial building</MenuItem>
    <MenuItem value="Industrial building">Industrial building</MenuItem>
    <MenuItem value="Land">Land</MenuItem>
    <MenuItem value="Vacation homes">Vacation homes</MenuItem>
    <MenuItem value="Retirement homes">Retirement homes</MenuItem>
    <MenuItem value="Mixed-use developments">Mixed-use developments</MenuItem>
  </Select>
</FormControl>
            <FormControl>
  <FormHelperText sx={{ fontWeight: 500, margin: '10px 0', fontSize: 16, color: '#11142d'}}>
    Enter property price
  </FormHelperText>
  <TextField 
    fullWidth
    required
    id="outlined-basic"
    color="info"
    type="number"
    variant="outlined"
    {...register('price', { required: true})}
    InputProps={{
      sx: {
        fontSize: 16,
        color: '#11142d',
        '&::placeholder': {
          color: '#8b8b8b',
          opacity: 1,
        },
      },
    }}
  />
</FormControl>
          </Stack>

          <FormControl>
  <FormHelperText sx={{ fontWeight: 500, margin: '10px 0', fontSize: 16, color: '#11142d'}}>
    Enter Location
  </FormHelperText>
  <TextField 
    fullWidth
    required
    id="outlined-basic"
    color="info"
    variant="outlined"
    placeholder="Type location here"
    {...register('location', { required: true})}
    inputProps={{
      style: {fontSize: 16},
    }}
  />
</FormControl> 
          <Stack direction="column" gap={1} justifyContent="center" mb={2}>
              <Stack direction="row" gap={2}>
                <Typography color="#11142d" fontSize={16} fontWeight={500} my="10px">Property Photo</Typography>

                <Button component="label" sx={{ width: 'fit-content', color: "#2ed480", textTransform: 'capitalize', fontSize: 16}}>
                  Upload *
                  <input 
                    hidden
                    accept="image/*"
                    type="file"
                    onChange={(e) => {
                      // @ts-ignore
                      handleImageChange(e.target.files[0])
                    }}
                  />
                </Button>
              </Stack>
              <Typography fontSize={14} color="#808191" sx={{wordBreak: 'break-all'}} >{propertyImage?.name}</Typography>
          </Stack>

          <CustomButton 
            type="submit"
            title={formLoading ? 'Submitting...' : 'Submit'}
            backgroundColor="#475be8"
            color="#fcfcfc"
          />
        </form>
      </Box>
    </Box>
  )
}

export default Form;