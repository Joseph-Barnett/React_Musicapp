import React from "react";

import { describe, it, expect, beforeEach, afterEach } from 'vitest'

import { screen, render, cleanup } from '@testing-library/react'

import userEvent from "@testing-library/user-event";

import * as matchers from '@testing-library/jest-dom/matchers'

expect.extend(matchers)

import ArtistDiscovery from '.'

describe('ArtistDiscovery Component', () => {
    it('should display a suitable image', () => {
        const element = screen.findByRole('img', {hidden: true})
        expect(element).toBeInTheDocument()
    })
})
