import { describe } from "node:test";
import { Title } from ".";
import React from "react";
import { render, screen } from '@testing-library/react'

describe('MyComponent', () => {
    it('renders correctly', () => {
      render(<Title />)
      expect(screen.getByText('Title')).toBeInTheDocument
    })
  
  
  })