import React from "react";

import { describe, it, expect, beforeEach, afterEach } from 'vitest'

import { screen, render, cleanup } from '@testing-library/react'

import userEvent from "@testing-library/user-event";

import * as matchers from '@testing-library/jest-dom/matchers'

expect.extend(matchers)

import ArtistForm from '.'

describe('ArtistForm component', () => {
    beforeEach(() => {
        render(<ArtistForm />)
    })

    afterEach(() => {
        cleanup()
    })

    it('should display a form', () => {
        const element = screen.getByRole('form')
        expect(element).toBeInTheDocument()
    })

    it('form should have an input', () => {
        const element = screen.getByRole('form')
        expect(element).toBeInTheDocument()
    })
})
